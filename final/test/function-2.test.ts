import { bebida } from "../src/function-1";

describe('Bebida', () => {
   it('deberia ser deliciosa', () => {
      expect(bebida()).toBeTruthy();
   });
});