import type { WeddingConfig } from '../types'
import { placeholderImage } from '../utils/placeholder'
import coverPhoto from '../Pics/Cover.jpg'
import venueImage from '../Pics/Venue.png'
import venuePhoto from '../Pics/Venue.png'
import E1 from '../Pics/E1.JPG'
import E2 from '../Pics/E2.JPG'
import E3 from '../Pics/E3.JPG'
import E4 from '../Pics/E4.JPG'
import E5 from '../Pics/E5.JPG'
import E6 from '../Pics/E6.JPG'
import E7 from '../Pics/E7.JPG'
import E8 from '../Pics/E8.JPG'
import E9 from '../Pics/E9.JPG'
import E10 from '../Pics/E10.JPG'
import E11 from '../Pics/E11.JPG'
import E12 from '../Pics/E12.JPG'
import E13 from '../Pics/E13.JPG'
import E14 from '../Pics/E14.JPG'

/**
 * ============================================================
 *  WEDDING CONFIGURATION
 * ============================================================
 *  This is the ONLY file most couples need to edit.
 *  Replace every "[placeholder]" value with real details.
 *  Swap placeholderImage(...) calls for real photo paths,
 *  e.g. "/photos/couple-hero.jpg" (place files in /public/photos).
 * ============================================================
 */

export const weddingConfig: WeddingConfig = {
  groom: {
    name: 'Yeswanth',
    fullName: 'Yeswanth',
    parents: "Sri. Srinivasulu & Smt. Hymavathi",
  },
  bride: {
    name: 'Dr. Rupa Keerthi',
    fullName: 'Dr. Rupa Keerthi',
    parents: "Sri. Bathala Bhupaiah & Smt. Vijaya Kumari",
  },

  // Primary ceremony date & time used for the countdown. Use ISO format with timezone offset.
  weddingDateISO: '2026-11-18T20:30:00+05:30',

  tagline: 'Together with the blessings of our families',

  couplePhoto: coverPhoto,
  heroBackdrop: venueImage,

  venue: {
    name: 'K.M.R. Convention Centre',
    address: 'NH-16, Naidupeta',
    city: 'Naidupeta',
    date: '2026-11-18',
    eventLabel: 'Wedding Ceremony',
    mapsUrl: 'https://maps.app.goo.gl/pvBzZWb55HuqnMbD6',
    mapsEmbedUrl: '',
    photo: venuePhoto,
  },

  events: [
    {
      id: 'sumuhurtham',
      name: 'Sumuhurtham (Auspicious Ceremony)',
      date: '2026-11-18',
      time: '8:30 PM',
      venue: 'K.M.R. Convention Centre',
      address: 'NH-16, Naidupeta',
      mapsUrl: 'https://maps.app.goo.gl/pvBzZWb55HuqnMbD6',
      dressCode: 'Traditional attire',
      description: 'The auspicious ceremony where the couple exchanges garlands and vows under the blessings of elders.',
      icon: 'wedding',
    },
    {
      id: 'dinner',
      name: 'Dinner',
      date: '2026-11-18',
      time: '8:00 PM',
      venue: 'K.M.R. Convention Centre',
      address: 'NH-16, Naidupeta',
      mapsUrl: 'https://maps.app.goo.gl/pvBzZWb55HuqnMbD6',
      dressCode: 'Formal / Evening wear',
      description: 'A special dinner to celebrate the union of Rupa Keerthi and Penchala Yeswanth.',
      icon: 'reception',
    },
  ],

  loveStory: [
    {
      id: 'first-hello',
      date: '',
      title: 'The First Hello',
      story: 'Some people arrive in your life quietly, and stay forever. You were one of them.',
      image: placeholderImage('The First Hello', 700, 700),
    },
    {
      id: 'when-we-met',
      date: '',
      title: 'When We Met',
      story: 'One conversation was all it took. Somehow, talking to you felt like coming home.',
      image: placeholderImage('When We Met', 700, 700),
    },
    {
      id: 'the-beginning',
      date: '',
      title: 'The Beginning',
      story: 'We never planned a story, but we wrote one anyway — one small moment at a time.',
      image: placeholderImage('The Beginning', 700, 700),
    },
    {
      id: 'falling-in-love',
      date: '',
      title: 'Falling in Love',
      story: 'It was never a single moment. It was your laugh, your kindness, and the way you made everything feel easy.',
      image: placeholderImage('Falling in Love', 700, 700),
    },
    {
      id: 'the-proposal',
      date: '02-09-2026',
      title: 'The Proposal',
      story: 'With a promise and a question, a lifetime of yes began.',
      image: placeholderImage('The Proposal', 700, 700),
    },
    {
      id: 'forever-begins',
      date: '18-11-2026',
      title: 'Forever Begins',
      story: 'Today, surrounded by everyone we love, we say yes — to each other, and to forever.',
      image: placeholderImage('Forever Begins', 700, 700),
    },
  ],

  gallery: [

    // { id: 'g1', src: placeholderImage('Our Moments', 800, 1000), category: 'Our Moments', alt: 'Our Moments', type: 'image' },
    { id: 'ga', src: E1, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g2', src: E2, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3', src: E3, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3a', src: E4, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3b', src: E5, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3c', src: E6, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3m', src: E7, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3d', src: E8, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3e', src: E9, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3f', src: E10, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3g', src: E11, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3h', src: E12, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3i', src: E13, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    { id: 'g3j', src: E14, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    // { id: 'g3k', src: E1, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },
    // { id: 'g3l', src: E2, category: 'Engagement', alt: 'Engagement — Dr. Rupa Keerthi & Penchala Yeswanth', type: 'image' },

    // { id: 'g4', src: placeholderImage('Pre-Wedding', 800, 1000), category: 'Pre-Wedding', alt: 'Pre-Wedding', type: 'image' },
    // { id: 'g5a', src: F1, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5b', src: F2, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5c', src: F3, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5d', src: F4, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5e', src: F6, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5f', src: F7, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5g', src: F8, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5h', src: F9, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5i', src: F10, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5j', src: F11, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5k', src: F12, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5l', src: F13, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g5m', src: F14, category: 'Family', alt: 'Family', type: 'image' },
    // { id: 'g11a', src: C1, category: 'Cousin', alt: 'Cousin', type: 'image' },
    // { id: 'g11b', src: C2, category: 'Cousin', alt: 'Cousin', type: 'image' },
    // { id: 'g11c', src: C3, category: 'Cousin', alt: 'Cousin', type: 'image' },
    // { id: 'g11d', src: C4, category: 'Cousin', alt: 'Cousin', type: 'image' },
    // { id: 'g6', src: placeholderImage('Friends', 800, 1000), category: 'Friends', alt: 'Friends', type: 'image' },
    // { id: 'g7', src: placeholderImage('Wedding', 800, 1000), category: 'Wedding', alt: 'Wedding', type: 'image' },
    // { id: 'g8', src: placeholderImage('Celebrations', 800, 1000), category: 'Celebrations', alt: 'Celebrations', type: 'image' },
    // { id: 'g9', src: placeholderImage('Pre-Wedding', 800, 1000), category: 'Pre-Wedding', alt: 'Pre-Wedding', type: 'image' },
    // { id: 'g10', src: placeholderImage('Our Moments', 800, 1000), category: 'Our Moments', alt: 'Our Moments', type: 'image' },
    // { id: 'g11', src: placeholderImage('Our Moments', 800, 1000), category: 'Our Moments', alt: 'Video: Our Moments', type: 'image' },
    // { id: 'g12', src: placeholderImage('Our Moments', 800, 1000), category: 'Our Moments', alt: 'Video: Our Moments', type: 'image' },

  ],

  video: {
    title: 'Our Journey Together',
    provider: 'none', // set to 'youtube' or 'vimeo' once a video exists
    embedId: '', // e.g. YouTube video ID or Vimeo ID
    poster: placeholderImage('Our Journey Together', 1280, 720),
  },

  contacts: [
    { id: 'coordinator', role: '', name: '', phone: 'Wedding Coordinators', whatsapp: '' },
    { id: 'bride-family', role: "Bride's Family", name: "Bhupaiah", phone: '' },
    { id: 'groom-family', role: "Groom's Family", name: "Srinivasulu", phone: '' },
  ],

  // Configure once — used for WhatsApp share buttons across the site.
  // Digits only, with country code, no + or spaces. Example: "911234567890"
  whatsappNumber: '',

  music: {
    title: 'Wedding Instrumental',
    src: '', // add a path like "/audio/wedding-theme.mp3" once you have licensed music
  },

  siteUrl: '',
}