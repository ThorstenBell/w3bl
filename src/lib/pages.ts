import {sanityClient} from 'sanity:client';
import type {PageDocument} from '../types/blocks';

const PAGE_BY_SLUG_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  slug,
  blocks
}`;

export async function getPageBySlug(slug: string): Promise<PageDocument | null> {
  const page = await sanityClient.fetch<PageDocument | null>(PAGE_BY_SLUG_QUERY, {slug});
  return page ?? null;
}
