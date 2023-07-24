import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("app", () => ({
  bill: null,
  nbrOfPeople: null,
  tipPercent: null,
  customOption: false,

  reset() {
    this.bill = null;
    this.nbrOfPeople = null;
    this.tipPercent = null;
    this.customOption = false;
  },

  showErrors() {
    if (
      this.bill !== null &&
      this.tipPercent !== null &&
      (this.nbrOfPeople === null || this.nbrOfPeople === String(0))
    ) {
      return true;
    }
    return false;
  },

  tipAmountPerPerson() {
    if (
      this.bill === null ||
      this.nbrOfPeople === null ||
      this.tipPercent === null
    ) {
      return "0.00";
    }
    const tipAmout =
      (Number(this.bill) * Number(this.tipPercent)) /
      100 /
      Number(this.nbrOfPeople);
    return isFinite(tipAmout) ? tipAmout.toFixed(2) : "0.00";
  },

  totalPerPerson() {
    if (
      this.bill === null ||
      this.nbrOfPeople === null ||
      this.tipPercent === null
    ) {
      return "0.00";
    }
    const total =
      (Number(this.bill) + Number(this.tipAmountPerPerson())) /
      Number(this.nbrOfPeople);
    return isFinite(total) ? total.toFixed(2) : "0.00";
  },

  isBillTooHigh() {
    if (this.bill !== null && Number(this.bill > 999999)) {
      this.bill = null;
      return true;
    }
    return false;
  },
}));

Alpine.start();
