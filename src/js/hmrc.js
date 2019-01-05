/* =======================================================================
 This file is created by Chechu Castro [chechu@digitatis.com]
 FILE NAME: hmrc.js
======================================================================= */

/* SORRY NO TIME LEFT FOR MORE FUN */
  let hmrc = {
    // Global init entry point
    init: function() {
      this.moduleNationalInsuranceNumber.init();
      this.moduleformTaxCredits.init();
    },
    moduleNationalInsuranceNumber: {
      init: function () {
        this.NationalInsuranceNumberValidator();
      },
      NationalInsuranceNumberValidator: function () {
        console.log('init NationalInsuranceNumber');
      }
    },
    moduleformTaxCredits: {
      init: function() {
        this.validateTaxCreditsRenewalNumber();
      },
      validateTaxCreditsRenewalNumber: function() {
        console.log('init validateTaxCreditsRenewalNumber');
      }
    }
  }
  // Global init
  hmrc.init();

