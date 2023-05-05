"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "nm54m1wk";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <button
            type="button"
            aria-label="Click to upload image"
            onClick={() => open?.()}
            className="relative flex flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70"
          >
            <TbPhotoPlus size={50} />
            <span className="text-lg font-semibold">Click to upload</span>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="Uploaded image"
                />
              </div>
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
