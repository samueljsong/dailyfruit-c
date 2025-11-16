
function isWordWithinLimit(value: string, maxLength: number): boolean
{
    return value.length <= maxLength;
}

export const util = {
    isWordWithinLimit
}