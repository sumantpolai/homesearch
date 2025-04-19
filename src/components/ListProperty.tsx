import React, { useState, useRef } from 'react';
import { Upload, X, Camera as Camera360, Plus } from 'lucide-react';
import Button from './ui/Button';

const ListProperty: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [view360Url, setView360Url] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideos([...videos, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const removeVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('hidden');
    }
  };

  const handleSelectOption = (value: string) => {
    setPropertyType(value);
    if (dropdownRef.current) {
      dropdownRef.current.classList.add('hidden');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Form Card */}
      <div className="relative max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-10 z-10">
        <h2 className="text-4xl font-bold text-white mb-8 drop-shadow">List Your Property</h2>

        <form className="space-y-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Property Title</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-none bg-white/20 text-white placeholder-white/70 p-3 focus:ring-2 focus:ring-blue-400"
                placeholder="e.g., Modern Downtown Apartment"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Property Type</label>
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="mt-1 w-full rounded-lg border-none bg-white/20 text-white placeholder-white/70 p-3 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                  {propertyType || 'Select Property Type'}
                </div>

                {/* Dropdown options */}
                <div
                  ref={dropdownRef}
                  className="absolute w-full bg-white/20 rounded-lg mt-1 p-3 hidden"
                >
                  <div
                    onClick={() => handleSelectOption('Apartment')}
                    className="py-2 cursor-pointer hover:bg-blue-600 rounded-lg"
                  >
                    Apartment
                  </div>
                  <div
                    onClick={() => handleSelectOption('House')}
                    className="py-2 cursor-pointer hover:bg-blue-600 rounded-lg"
                  >
                    House
                  </div>
                  <div
                    onClick={() => handleSelectOption('Villa')}
                    className="py-2 cursor-pointer hover:bg-blue-600 rounded-lg"
                  >
                    Villa
                  </div>
                  <div
                    onClick={() => handleSelectOption('Commercial')}
                    className="py-2 cursor-pointer hover:bg-blue-600 rounded-lg"
                  >
                    Commercial
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg border-none bg-white/20 text-white placeholder-white/70 p-3 focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your property..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input className="bg-white/20 text-white p-3 rounded-lg placeholder-white/70 focus:ring-2 focus:ring-blue-400" placeholder="Price" type="number" />
            <input className="bg-white/20 text-white p-3 rounded-lg placeholder-white/70 focus:ring-2 focus:ring-blue-400" placeholder="Bedrooms" type="number" />
            <input className="bg-white/20 text-white p-3 rounded-lg placeholder-white/70 focus:ring-2 focus:ring-blue-400" placeholder="Bathrooms" type="number" />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border-none bg-white/20 text-white placeholder-white/70 p-3 focus:ring-2 focus:ring-blue-400"
              placeholder="Full property address"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Images</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img src={URL.createObjectURL(image)} className="w-full h-24 object-cover rounded-lg" />
                  <button
                    onClick={() => removeImage(index)}
                    type="button"
                    className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <label className="cursor-pointer">
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
                <div className="h-24 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center hover:border-blue-400">
                  <Plus className="w-6 h-6 text-white/70" />
                </div>
              </label>
            </div>
          </div>

          {/* Video Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Videos</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <div key={index} className="relative">
                  <video src={URL.createObjectURL(video)} className="w-full h-24 object-cover rounded-lg" controls />
                  <button
                    onClick={() => removeVideo(index)}
                    type="button"
                    className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <label className="cursor-pointer">
                <input type="file" multiple accept="video/*" className="hidden" onChange={handleVideoUpload} />
                <div className="h-24 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center hover:border-blue-400">
                  <Plus className="w-6 h-6 text-white/70" />
                </div>
              </label>
            </div>
          </div>

          {/* 360 View */}
          <div>
            <label className="block text-sm font-medium">360° View URL</label>
            <div className="mt-1 flex rounded-lg shadow-sm bg-white/20 focus-within:ring-2 focus-within:ring-blue-400">
              <span className="inline-flex items-center px-3 text-white">
                <Camera360 className="w-5 h-5" />
              </span>
              <input
                type="url"
                value={view360Url}
                onChange={(e) => setView360Url(e.target.value)}
                className="flex-1 block w-full bg-transparent text-white placeholder-white/70 p-3 border-none"
                placeholder="Enter your 360° tour URL"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button" className="bg-white/20 text-white border-white/30 hover:bg-white/30">Cancel</Button>
            <Button variant="primary" type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Upload className="w-4 h-4 mr-2" />
              List Property
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
  