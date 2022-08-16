import { handleGalleryEvents } from './gallery';

function main(): void {
  // Set the active state on the nav element for the current page.
  const {
    location: { pathname },
  } = window;

  let path = pathname.split("/")[1];

  if (path.length === 0) {
    path = "/";
  }

  const getClass = (): string => {
    if (path === '/') {
      return 'home';
    }

    if (path === 'archive') {
      return 'posts';
    }

    if (path === 'photos') {
      return 'gallery';
    }

    if (path === 'about') {
      return 'about';
    }

    return 'posts';
  }

  const currentPage: HTMLElement | null = document.querySelector(`.nav--link.${getClass()}`);
  currentPage?.classList.add("active");

  document.body.classList.remove('hidden');
  // Initialize gallery event listeners.
  handleGalleryEvents();
}

window.addEventListener("load", main);
