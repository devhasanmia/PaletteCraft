import React from 'react';

const colors = [
  { "name": "Black", "color": "#000000" },
  { "name": "Red", "color": "#FF0000" },
  { "name": "White", "color": "#FFFFFF" },
  { "name": "Green", "color": "#00FF00" },
  { "name": "Blue", "color": "#0000FF" },
  { "name": "Yellow", "color": "#FFFF00" },
  { "name": "Cyan", "color": "#00FFFF" },
  { "name": "Magenta", "color": "#FF00FF" },
  { "name": "Gray", "color": "#808080" },
  { "name": "Orange", "color": "#FFA500" },
  { "name": "Purple", "color": "#800080" },
  { "name": "Pink", "color": "#FFC0CB" }
];

const Popular = () => {
  return (
    <div>
      <h1 className='mt-5 text-[#104864] text-4xl font-extrabold text-center mb-5'>Must Popular Color And Color Code </h1>
      <hr />
      <br />
      <div className="grid grid-cols-4 gap-4">
        {colors.map(color => (
          <div key={color.name} className="bg-white text-center rounded-lg shadow-md p-4">
            <strong>{color.color}</strong>
            <div className="w-full h-20 bg-gray-200 rounded-lg" style={{ backgroundColor: color.color }} />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">{color.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
