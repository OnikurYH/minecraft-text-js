import MinecraftText from '..';

describe('toHTML', () => {
  describe('when call with text with color', () => {
    it('should output expected HTML', () => {
        expect(MinecraftText.toHTML('&a&lHello, &rWo&3&m&nrld!')).toMatchSnapshot();
    });
  });
});
