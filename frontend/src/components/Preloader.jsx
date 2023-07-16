const Preloader = ({ size, isImageError = false }) => (
  <div
    className={`preloader preloader_size_${size} ${isImageError && 'preloader_error_photo'}`}
  />
);

export default Preloader;
