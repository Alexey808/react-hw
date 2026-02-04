export interface ShortMovieInfo {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: RootShortReview;
  aggregateRating: RootShortAggregateRating;
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  trailer: RootShortTrailer;
  actor: RootShortActorItem[];
  director: RootShortDirectorItem[];
  creator: RootShortCreatorItem[];
  duration: string;
}

interface RootShortReview {
  "@type": string;
  itemReviewed: RootShortReviewItemReviewed;
  author: RootShortReviewAuthor;
  dateCreated: string;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: RootShortReviewReviewRating;
}
interface RootShortReviewItemReviewed {
  "@type": string;
  url: string;
}
interface RootShortReviewAuthor {
  "@type": string;
  name: string;
}
interface RootShortReviewReviewRating {
  "@type": string;
  worstRating: number;
  bestRating: number;
  ratingValue: number;
}

interface RootShortAggregateRating {
  "@type": string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

interface RootShortTrailer {
  "@type": string;
  name: string;
  embedUrl: string;
  thumbnail: RootShortTrailerThumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
}
interface RootShortTrailerThumbnail {
  "@type": string;
  contentUrl: string;
}

interface RootShortActorItem {
  "@type": string;
  url: string;
  name: string;
}

interface RootShortDirectorItem {
  "@type": string;
  url: string;
  name: string;
}

interface RootShortCreatorItem {
  "@type": string;
  url: string;
}