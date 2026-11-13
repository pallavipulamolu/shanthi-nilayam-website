# Representative stock images

Royalty-free elderly-care photographs from Pexels (see SOURCES.md), used ONLY
as representative imagery. They are not photographs of Shanthi Nilayam
residents, staff, facilities or activities, and the site labels them
"Representative image".

Layout: `<category>/<slot-id>.jpg` (1280px wide) plus `<slot-id>@640.jpg`
(640px, served to small screens through `srcset`). Slot ids are listed in
`src/data/photos.ts`.

When an authentic, consented photograph is available, add it to
`src/assets/photos/<slot-id>.jpg`. It replaces the stock image for that slot
automatically and the "Representative image" label disappears.
