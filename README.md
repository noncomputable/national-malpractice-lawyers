# National Malpractice Lawyers Website

A professional website for Peter Anderson, nationwide medical malpractice attorney.

## About Peter Anderson

Peter Anderson is a medical malpractice attorney with over 15 years of experience representing victims of medical negligence. He handles cases nationwide.

**Contact:** peter@nationalmalpracticelawyers.com

## Website Features

- **Homepage**: Features Peter Anderson's expertise and notable case results
- **About Page**: Detailed professional background, education, and experience
- **Practice Areas**: Specialized in medical malpractice, FTCA claims, and nursing home abuse
- **Articles**: Educational content about medical malpractice law
- **Contact Page**: Easy contact form and consultation information

## Notable Case Results

- DC Birth Injury Case: $6.5 Million
- VA Nursing Home Case: $500,000 (created new precedent)
- FTCA Prostate Cancer Case: $900,000
- FTCA Sepsis Case: $1.5 Million

## Adding Images

### Peter Anderson Headshot

1. **Location**: Add Peter's professional headshot to `/public/images/`
2. **Recommended filename**: `peter-anderson-headshot.jpg` or `peter-anderson-headshot.png`
3. **Recommended size**: 400x400 pixels minimum (square format works best)
4. **Quality**: High-resolution professional photo

### Where to Add the Headshot

The headshot placeholder is currently in these locations:
- Homepage: Featured attorney section
- About page: Attorney profile section

To add the actual image, replace the placeholder divs with:

```jsx
<Image
  src="/images/peter-anderson-headshot.jpg"
  alt="Peter Anderson - Medical Malpractice Attorney"
  width={400}
  height={400}
  className="rounded-lg"
/>
```

### Additional Images

You can add additional images to `/public/images/` for:
- Office photos
- Courtroom images
- Professional awards or certificates
- Team photos (if applicable)

## Technical Details

- Built with Next.js 14
- Styled with Tailwind CSS
- Responsive design
- SEO optimized

## Running the Website

```bash
npm install
npm run dev
```

The website will be available at `http://localhost:3000`

## Deployment

The website is configured for deployment on various platforms. Update the deployment settings as needed for your hosting provider.

## Content Updates

All content has been updated to reflect Peter Anderson's real:
- Professional experience
- Education background
- Case results
- Practice areas
- Contact information

The website now accurately represents Peter's expertise in medical malpractice, FTCA claims, and nursing home abuse cases.
