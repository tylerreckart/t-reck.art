import { PhotoGallery } from '@src/types/gallery';

export const galleryConfig: PhotoGallery[] = [
    {
      title: 'Small Scenes',
      path: 'small-scenes',
      colophon: `<p>A large part of my photography focuses on highlighting smaller, more intimate subjects. The scenes in these photographs may not be off the beaten path, but may often be overlooked by those focused on grand vistas and the trail ahead.</p><p>If you're interested in purchasing bespoke and tailored prints of any of the images below, <a href="mailto:prints@reckart.blog" target="_blank" rel="noreferrer">get in touch with me</a> for a quote.</p>`,
      featuredImage: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/small-scenes/thumbnail-min.jpg',
      images: [
        { title: 'Untitled', location: 'Conestee Nature Preserve', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/home/fern-min.jpg', alt: '' },
        { title: 'In The Shadow of Giants', location: 'Conestee Nature Preserve', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/small-scenes/maple_leaves_in_shadow-min.jpg', alt: '' },
        { title: 'Hyacinth Leaves at Dawn', location: 'Conestee Nature Preserve', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/small-scenes/hyacinth_leaves_at_dawn-min.jpg', alt: '' },
      ],
    },
    {
      title: 'Brick & Stone',
      path: 'brick-and-stone',
      colophon: '',
      featuredImage: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/thumnail-min.jpg',
      images: [
        { title: 'Fixture', location: 'Lyman, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/fowler_bros-min.jpg', alt: '' },
        { title: 'Tuxedo Shop', location: 'Lyman, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/tuxedo_shop-min.jpg', alt: '' },
        { title: 'Disillusion', location: 'Greenville, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/disillusion-min.jpg', alt: '' },
        { title: 'Untitled', location: 'Greenville, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/untitled-min.jpg', alt: '' },
        { title: 'Left Behind', location: 'Greenville, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/left_behind-min.jpg', alt: '' },
        { title: 'Untitled', location: 'Greenville, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/brick-and-stone/no_trespassing-min.jpg', alt: '' },
      ],
    },
    {
      title: 'Land & Sea',
      path: 'land-and-sea',
      colophon: '',
      featuredImage: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/land-and-sea/thumbnail-min.jpg',
      images: [
        { title: 'Sunrise Over Sol Legare', location: 'Charleston, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/land-and-sea/sunrise_over_sol_legare-min.jpg', alt: '' },
        { title: 'Dockside at Dawn', location: 'Reidville, South Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/land-and-sea/dockside_at_dawn-min.jpg', alt: '' },
        { title: 'Apple Orchard in Autumn', location: 'Hendersonville, North Carolina', year: 2022, src: 'https://s3.us-east-2.amazonaws.com/reckart.blog-images/land-and-sea/apple_orchard_in_autumn-min.jpg', alt: '' },
      ]
    },
  ];