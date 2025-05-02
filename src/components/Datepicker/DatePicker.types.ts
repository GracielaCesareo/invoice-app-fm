export interface DatePickerProps {
    label?: string;
    selected: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
}