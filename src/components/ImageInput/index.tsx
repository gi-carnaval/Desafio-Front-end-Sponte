import { SetStateAction, useState } from "react";
import PropTypes from 'prop-types';
import { Container, NewImage } from "./styles";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";

interface ImageUploaderProps {
  images: {
    loaded: never[];
  },
  setImages: React.Dispatch<SetStateAction<{
    loaded: never[];
    toUpload?: File[];
}>>
}

export function ImageInput( props: ImageUploaderProps ) {
  const { images, setImages } = props;
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleSelectImages = (event:React.ChangeEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setImages({ ...images, toUpload: selectedImages });
      const selectedImagesPreview = selectedImages.map((image) => {
        return URL.createObjectURL(image);
      });
      setPreviewImages(selectedImagesPreview);
    }
  };

  return (
    <Container>
      {images &&
        images.loaded.map((image) => {
          return <img key={image} src={image} alt="produto" />;
        })}
      {previewImages.map((image) => {
        return <img key={image} src={image} alt="produto" />;
      })}
      <NewImage htmlFor="image[]">
        <FaCreativeCommonsSamplingPlus size={24} color="#8257e5" />
        <input
          id="image[]"
          type="file"
          multiple
          onClick={() => setImages({ ...images, loaded: [] })}
          onChange={handleSelectImages}
        />
      </NewImage>
    </Container>
  );
}

ImageInput.propTypes = {
  images: PropTypes.shape({
    loaded: PropTypes.arrayOf(PropTypes.string),
    toUpload: PropTypes.arrayOf(PropTypes.object),
    toDelete: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setImages: PropTypes.func.isRequired,
};