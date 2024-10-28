// EXPORTING THE FUNCTION FOR FORMATTING DATE AS MM/DD/YYYY IN A STRING
module.exports = {
  formatDate: (date) => {
    return date.toLocaleDateString();
  },
};
