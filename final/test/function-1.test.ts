import { cantidadBebida } from "../src/function-2";

describe('Cantidad bebida', () => {
   it('deberia ser mayor a 10', () => {
      expect(cantidadBebida()).toBeGreaterThan(10);
   });
});