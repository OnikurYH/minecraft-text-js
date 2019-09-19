describe('init', () => {
    describe('when import this library in cjs', () => {
        it('should no error', () => {
            expect(import('..')).toBeDefined();
        });
    });
});
