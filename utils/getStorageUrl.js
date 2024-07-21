// utils/getStorageUrl.js
export const getStorageUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_STORAGE_URL; // Use NEXT_PUBLIC_ prefix for Next.js

  console.log("base ", baseUrl);

  // Check if path is defined and not null
  if (!path) {
    console.error("Path is undefined or null");
    return `${baseUrl}/default-image.jpg`; // Return a default image URL or handle it appropriately
  }

  // Return the full URL with path
  return `${baseUrl}${path.replace('public/', '')}`;
};
