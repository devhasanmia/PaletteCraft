import React, { useState } from 'react';
import Popular from './Popular';

const Palette = () => {
  // State variables
  const [selectedColor, setSelectedColor] = useState('#FFFF00'); // Initial color is yellow
  const [colorName, setColorName] = useState('');
  const [colors, setColors] = useState([]);
  // Function to handle color change
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  // Function to handle color name change
  const handleNameChange = (e) => {
    setColorName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (colorName.trim() === '') {
      alert('Please enter a color name.'); // Basic error handling
      return;
    }
    setColors([...colors, { selectedColor, colorName }]);
    setColorName('');
  };

  return (
    <div className="flex justify-center items-center mt-5 ">
      <div className=" text-center">
        <h1 className="mt-5 text-[#104864] text-4xl font-extrabold">Create Color Palette</h1>
        <p className='mt-2 font-semibold'>Experience the fusion of art and technology with PaletteCraft's innovative approach to color curation.</p>
        <hr />
        <br />
        <div className="flex items-center w-full">
          <input
            type="color"
            className="color-picker w-24 h-16 shadow-md rounded-md ml-4 border-indigo-600"
            value={selectedColor}
            onChange={handleColorChange}
          />
          <input
            type="text"
            id="color-name"
            placeholder="Enter Color Name"
            className="color-name h-16 shadow-md rounded-md ml-4 px-4 border-solid border-2 border-indigo-600 focus:outline-none"
            value={colorName}
            onChange={handleNameChange}
          />
          <button className="submit-button ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md" onClick={handleSubmit}>Submit</button>
        </div>
        <br />
        <br />
        <br />
        <div className="grid mt-5 grid-cols-4 gap-4 ">
          {colors.map((color, index) => (
            <div key={index} className="color-card bg-white text-center rounded-lg shadow-md p-4">
              <strong>{color.selectedColor}</strong>
              <div className=" w-full h-20 rounded-lg" style={{ backgroundColor: color.selectedColor }} />
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{color.colorName}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <Popular/>

      </div>
    </div>
  );
}

export default Palette;
