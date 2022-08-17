const numericConverter=(num) => {
const calculator= {
    binary: Math.abs(num).toString(2),
    octal: Math.abs(num).toString(8),
    hexa: Math.abs(num).toString(16),
};
return calculator;

};

export default numericConverter;