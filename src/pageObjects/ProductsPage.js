import { ProductsPageLocators } from "@src/pageLocators/productsPageLocators";

export class ProductsPage {
    constructor(page) {
        this.page = page;
       this.productsPageLocators = ProductsPageLocators(page);
    }

    async clickOnFilterDropdown() {
        await this.productsPageLocators.dropdown.click();
    }

    /**
 * Selects a filter option from the dropdown
 * @param {string} filterValue - The filter option to select
 * @throws {Error} When an invalid filter option is provided
 */
async selectFilter(filterValue) {
    // Input validation
    if (!filterValue || typeof filterValue !== 'string') {
        throw new Error('Filter value must be a non-empty string');
    }

    // Configuration object for better maintainability
    const FILTER_OPTIONS = {
        'A to Z': 'Name (A to Z)',
        'Z to A': 'Name (Z to A)', 
        'low to high': 'Price (low to high)',
        'high to low': 'Price (high to low)'
    };

    const normalizedFilterValue = filterValue.trim();
    const dropdownOption = FILTER_OPTIONS[normalizedFilterValue];

    if (!dropdownOption) {
        const availableOptions = Object.keys(FILTER_OPTIONS).join(', ');
        throw new Error(`Invalid filter option: "${filterValue}". Available options: ${availableOptions}`);
    }

    try {
        await this.clickOnFilterDropdown();
        await this.productsPageLocators.dropdown.selectOption(dropdownOption);
    } catch (error) {
        throw new Error(`Failed to select filter "${filterValue}": ${error.message}`);
    }
}

    async getProductOnProductsPagePerIndex(index) {
        if(index < 0 || index > his.productsPageLocators.productsInfo.length - 1) {
            throw('Index cannot be smaller than 0 and greater than 5')
        }
        return await this.productsPageLocators.productsInfo.nth(index);
    }
}
