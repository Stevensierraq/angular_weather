export interface Weather {
    name?: string;
    cod?: number;
    icon?: string;
    temp?: number;
    description?: string;
    main?: string;
    minMaxTemp?: MinMaxInterface; 
}

interface MinMaxInterface {
    date?: number;
    day?: number;
    month?: number;
    min?: number;
    max?: number;
}