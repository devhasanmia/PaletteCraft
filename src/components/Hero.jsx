import ColourPaletteImage from '../assets/ColourPalette.png';

const Hero = () => {
  return (
    <div className="bg-[#dff1ff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center text-[#104864] lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold sm:text-4xl">Welcome to PaletteCraft</h2>
            <p className="mt-3 sm:center text-3xl text-lg">
            Experience the fusion of art and technology with PaletteCraft's innovative approach to color curation.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="https://github.com/devhasanmia/PaletteCraft" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-2/1 self-auto m-auto">
            <img className="rounded-lg" width={420} src={ColourPaletteImage} alt="Colour Palette" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
