// import { Component, inject, signal } from '@angular/core';
// import { ListaComponent } from '../../components/lista/lista.component';
// import { GifService } from '../../services/gifs.service';

// const imageUrls: string[] = [
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
// ];

// @Component({
//   selector: 'app-tendencias-page',
//   imports: [ListaComponent],
//   templateUrl: './tendencias-page.component.html',
// })
// export default class TendenciaPageComponent {
//       gifService = inject(GifService);

// }



import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app//services/scroll-state.service';
import { ListaComponent } from '../../components/lista/lista.component';
import { AfterViewInit, inject,Component, viewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-tendencias-page',
  imports: [ListaComponent],
  templateUrl: './tendencias-page.component.html',
})
export default class TendenciaPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    // console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight });
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.cargarGifsTendencia();
    }
  }
}