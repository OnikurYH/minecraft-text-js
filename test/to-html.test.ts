import MinecraftText from '..';

describe('toHTML', () => {
  describe('when call with text with color', () => {
    it('should output expected HTML', () => {
        expect(MinecraftText.toHTML('&a&lHello, &rWo&3&m&nrld!\\n&a<Minecraft>&bText&cJS')).toMatchSnapshot();
    });
  });
  describe('when call with unicode text', () => {
    it('should output expected HTML', () => {
        expect(MinecraftText.toHTML('&a&l你好，&r世&3&m&n界!')).toMatchSnapshot();
    });
  });
});
