/**
 * @file mofron-comp-okdialog/index.js
 * @brief jspreadsheet component for mofron
 * @license MIT
 */
const Dialog = require("mofron-comp-dialog");

module.exports = class extends Dialog {
    /**
     * initialize component
     * 
     * @param (mixed) string: label text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("OKDialog");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.button(
                "OK",
                {
                    size: new mofron.class.ConfArg("1.5rem","0.3rem"),
                    clickEvent: new mofron.class.ConfArg(
                        (p1,p2,p3) => {
                            p3.visible(false);
                        },
                        this
                    )
                }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
/* end of file */
