import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css'; // Custom styles override
import { DatePickerProps } from './DatePicker.types';

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  selected,
  onChange,
  placeholder = 'Select date',
  minDate,
  maxDate,
}) => {
  return (
    <div className="flex flex-col gap-1 w-64">
      {label && <label className="text-sm text-violet-500 font-medium">{label}</label>}
      <div className="relative">
        <ReactDatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={placeholder}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="dd MMM yyyy"
          className="w-full rounded-lg border border-violet-300 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm"
          calendarClassName="custom-calendar"
          popperPlacement="bottom-start"
        />
        <CalendarDays className="absolute right-3 top-2.5 h-5 w-5 text-violet-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default DatePicker;
