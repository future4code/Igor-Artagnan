describe("Testando mocks", ()=> {
    
    test("Creating Mocks", () => {
        const validator = jest.fn(() => {
                return true
            });
    });

    test("Creating Mocks", () => {
        const validator = jest.fn(() => {
                return false
            });
    });
})