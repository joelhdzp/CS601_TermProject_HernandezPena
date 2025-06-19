import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: string;
  group: string;
  image: string;
  alt: string;
}

function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}gallery.json`)
      .then((res) => res.json())
      .then((data) => setGalleryItems(data))
      .catch((error) => console.error('Error loading gallery.json:', error));
  }, []);

  const groupNames = Array.from(new Set(galleryItems.map((item) => item.group)));

  return (
    <motion.section
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Photo Gallery</h2>
      {groupNames.map((group, i) => (
        <motion.div
          key={group}
          className="gallery-group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.8 }}
        >
          <h3 className="fun-font">{group}</h3>
          <div className="gallery-grid">
            {galleryItems
              .filter((item) => item.group === group)
              .map((item) => (
                <motion.img
                  key={item.id}
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.alt}
                  className="gallery-image"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Gallery;