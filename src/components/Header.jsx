import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import unitsIcon from '../assets/images/icon-units.svg';
import dropDown from '../assets/images/icon-dropdown.svg';
import checkmark from '../assets/images/icon-checkmark.svg';
import React from 'react'

export default function Header({ units, onToggleUnits }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <header className='flex justify-between items-center mb-8'>
      <div className="flex item-center space-x-2">
        <img src={logo} alt="Weather now" className='w-40 sm:w-auto' />
      </div>

      <div className="relative">
        <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          className='flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200'>
            <img src={unitsIcon} alt="units" className='inline-block mr-2' />
            Units
            <img 
            src={dropDown} alt="" 
            className={`inline-block ml-2 ${isDropDownOpen ? 'rotate-180 transition' : ''}`} />
          </button>

          {isDropDownOpen && (
            <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-lg z-50 text-sm">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => {
                    onToggleUnits();
                    setIsDropDownOpen(false);
                  }} className='text-white glass-card p-2 rounded-lg transition-colors w-full'>
                    Switch to {units === 'metric' ? 'Imperial' : 'Metric'}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-white text-sm mb-2">Temperature</div>
                      <div className="space-y-1">
                        <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'metric' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                          <span className="text-white">Celsius (&deg;C)</span>
                          {units === 'metric' && (
                            <img src={checkmark} alt="" className='inline-block mr-2' />
                          )}
                        </div>

                        <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'imperial' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                          <span className="text-white">Fahrenheit (&deg;F)</span>
                          {units === 'imperial' && (
                            <img src={checkmark} alt='' className='inline-block mr-2' />
                          )}
                        </div>
                      </div>
                  </div>

                  <div>
                    <div className="text-white text-sm mb-2">Wind Speed</div>
                    <div className="space-y-1">
                      <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'metric' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                        <span className="text-white">km/h</span>
                        {units ==='metric' && (
                          <img src={checkmark} alt='' className='inline-block mr-2' />
                        )}
                      </div>
                      
                      <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'imperial' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                        <span className="text-white">mph</span>
                        {units === 'imperial' && (
                          <img src={checkmark} alt='' className='inline-block mr-2' />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-white text-sm mb-2">Precipitation</div>
                    <div className="space-y-1">
                      <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'metric' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                        <span className="text-white">Millimeter (mm)</span>
                        {units === 'metric' && (
                          <img src={checkmark} alt='' className='inline-block mr-2' />
                        )}
                      </div>

                      <div className={`flex items-center justify-between px-3 py-2 rounded ${units === 'imperial' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}>
                        <span className="text-white">Inches (in)</span>
                        {units === 'imperial' && (
                          <img src={checkmark} alt='' className='inline-block mr-2' />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
}
