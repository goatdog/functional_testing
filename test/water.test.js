const WaterJS = require('../water_fee_calc');

it('Test01', () => {
    expect(WaterJS.water_fee_calc("normal", -69)).toBe(-1);
});

it('Test02', () => {
    expect(WaterJS.water_fee_calc("normal", 5)).toBe(29865);
});

it('Test03', () => {
    expect(WaterJS.water_fee_calc("normal", 12.7)).toBe(80886);
});

it('Test04', () => {
    expect(WaterJS.water_fee_calc("normal", 23.69)).toBe(164926);
});

it('Test05', () => {
    expect(WaterJS.water_fee_calc("normal", 36)).toBe(312514);
});

it('Test06', () => {
    expect(WaterJS.water_fee_calc("poor", -69)).toBe(-1);
});

it('Test07', () => {
    expect(WaterJS.water_fee_calc("poor", 5)).toBe(18000);
});

it('Test08', () => {
    expect(WaterJS.water_fee_calc("poor", 12.7)).toBe(49500);
});

it('Test09', () => {
    expect(WaterJS.water_fee_calc("poor", 23.69)).toBe(103400);
});

it('Test10', () => {
    expect(WaterJS.water_fee_calc("poor", 36)).toBe(177200);
});

it('Test11', () => {
    expect(WaterJS.water_fee_calc("spiderman", -69)).toBe(-1);
});

it('Test12', () => {
    expect(WaterJS.water_fee_calc("spiderman", 5)).toBe(-1);
});

it('Test13', () => {
    expect(WaterJS.water_fee_calc("spiderman", 12.7)).toBe(-1);
});

it('Test14', () => {
    expect(WaterJS.water_fee_calc("spiderman", 23.69)).toBe(-1);
});

it('Test15', () => {
    expect(WaterJS.water_fee_calc("spiderman", 36)).toBe(-1);
});
