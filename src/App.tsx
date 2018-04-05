import * as React from 'react';
import * as pbi from 'powerbi-client';

export default class App extends React.Component<{}, {}> {
    private powerbi: pbi.service.Service;
    private embedContainer: HTMLDivElement;
    constructor(props: {}) {
        super(props);
        this.powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    }
    public render() {
        return (
                <div className="embedContainer" powerbi-type="report" style={{'height' : '600px', 'width' : '100%'}} ref={(div) => { if (div) {this.embedContainer = div; }}}/>
        );
    }
    componentDidMount() {
        // console.log(this.props);
        let config = {
            'accessToken': 'H4sIAAAAAAAEACWWx6rFCo5F_-VN3eCcGmpg-zjnHGbOOWcX_e99qZqKLRBL2pL-_Y-VvsOcFv_87z9H1MgeRM4z0RXcnEWVWhkkNVt6AHztEwfLAhtYTOi4qzQ0Y7acQBPIiN56hsJySJcl6iyfVL-uMIAGVoAWFdN64nwBVvgDVAFh1lrtZ1i3sPrsAaK7IUqEX413cBHngxgA1J3mrAXuTsvuRDl-bGB2MvFpWsW830ZP8_7Knt5tkP9w0ztfvfh2GS53sAD0VbgNGrWBw1Qy8rGnWbL6XcHqF-sXL--00f8kMPLhXSdYOEgfKJ4mZjYsxpyBmbeA-nkmRsKSvugMkLVx59stGvNQQ8aPsh3OGCU5VBmC8IgRHohk8qsjLjNhs9-viHUExAsc0l5RjAEctKyic5U9x7U9KZf9nJI-oCpys4zCARSWedycz6EntO64UJRLW5Zkij0QXt09-NY5SZuqEjXwthvr-iycjqxlWAoCt6Rrnl5rZkgjyX3kcEpuK-t-CzQ2rDx2RioaYUgp-Sy-94NZucciJqChzOPwir5eXTzow5HeGPxLM6LJWH_DzxUpT6r0rDRUafiE1pCKqVY7G1Ypcwc4YBfrAlZEM7Oid8NUrd5RYiCluGXmjfsCtDzjCFDT10hWaxtKud9y5IXlKOt1ky0ZnTRdYcXUK5jz6RtNCbaXEJkmDc7CVwHs3AMKsGVR6WlThy9NxuCFeAY7I0GmuDyJJZEquU6EfWcibGF-NryP7CHPHd0o8KrqgLwf_NiqR9JlKTB2p-4a61NiqGeSL9frlAwBnAsWS6rfRSj9AIX2I6NzWQiByAc0KsVXTaUikoGN7-7U5DDN4kCtppkzXZx0PtvGwNS_cENZnY-wS_91tqTswynochBYcC81fJkBgLw6raXpEMn0cRDuDpllhm3VM94i2K9Tz8qzYs6hNUe_u20_8WK2IJirGSDjTP6gRSeynzfezCpBEPhB77lPqPPzpY7ASiCoH0B7AhPZkzHwqvfKkCjEBM8pPvPL56GY6cXwxTtymSW0sZnh4jJKzViRYod5rxa_qUvKw0CBE84GeNfCCL4bSW7z-Vtze1a2fpZdqBOIHRzQdNAM76k6SaVZ-4lNU_NbY1GD_cl04LspxoNL4EhxdFexX0bAZ1esq4phqlnw1afJaI2lQy2ugkbetB0tUJhopCmSUOn1nqZzatYcE-VGrL1pPKhUGTbGsYPyvmcCiezfQeiakOaBQCa7n53M_OUy0Zyj3tlMZ4QlTTrLva7p3_QzMGlBOti_oPLV8JBkgDXnA3i5LvqOH54u1vTbpU_hvLkiz53EUSHnMei3TQ4sKSsSlNGIr2l7Nu4NmvR1XN0GbVvcjWEUvrJByulJPheYTENV4BPexKsrrgvxRetL2Q5_9VmQl10SmUAcueGA0MoiC1ThZw21CO-gkLkcxTxf9_vMj7nOCxZUjHl60eRsKLXi_lQXvtkzesblG3n7DO6M9yRuToWiE7LZxHuyTjoM0OCpfcqFeJGMat-Ct12_BPGzVL42EosawwEbpU5qp5STkJ7T547a1fNcR_ZnIvaDgBaoMMN3lbWrWMLUt4rTvzECbbPpuk8X9IMmGGu5ZHhgF52hteaL1JXFiMf4SwwLMUx6bxKGLMk12tUs_GsgXFdwxCepmJ3RMNiiQKmDUaPRTZpN7E1GqoK84XZUI6UAAnbWMgLX1q0IQ0u0u-ZN538_Uq1FJXBCeOtLEL78ZEdphNWVbKWpzp825po-eSGx8PnVNQ-BasXcuSx5idVX-jV7vB1WQIRsoG5o1ZkLPxKxn-dqMRHsUMdD1ZEdcTsCHUP_tsKo-gd5blUSDbSUTEXqtQrRBnFv6b-56rclkaakSrSRmeBp7xdOZ_k4mrXWroWFILSGdkdrPowzl_rEJ_42Vu60_SPShyTV-6EfKUgJsbVf8ZwH9wA2zZpG4uoIhXI_TW6XX740WE4-BuKIpTX6kHjgFe-0l4MvOYd8t4JIeVfQDKmfOqTQdkIV6UQ6SimpF4PEs7sxpBBCYCsbcnmaUUWmQotCv9JMn45fwDgrisny2hZr3kwMizhSZAXHRQjlR8QBCwhNEZOp8_0o-f3lupftnb8q1UY5UkuKf9X9pni_NudE6VX5O-1UBtwF85ZtS4v276BI3gxOAvavf_7nH257l2NWy_fvdWABg0tp--YwecRnza8bvhb1NSiah5lLW4PY2Iu4cvEqRQIX0M6qtalVsQGJBdMUHmA2m7TYDMT8xWHMcHvFURcGKdBg3l091HrpUiDD2vI87He4uka1IKHZ9H4nBJ3X76-29Jcp4XZVibFL8aRlARp2dvk9rP6nFuhSZfT8F742_NfzndCS4QHkyOkmL689ni3dWJ-g5XOFvBwbhfpxcgduYawng9iOmqik5AsWNxzVwSc9U_-aUso2eIBA6D486-9UOPb8EHCFjBbAV7wWpqfdWSH6Eu4twCIe4ZMMAoC4hhd2CaNMvit7Zn5bWqsILboqz6JXWij7gii526qmqHuw__UfzO_SlJsc_FGWG3ShUUxf49kfGHl_ZBPF_6ty23pKj3Mr_2TdXioeGeDZ2bn2qNAIg14akmpxeiD3xZtvtY37s6VrOoRG8Ica9LtPRxiiJJzxc7BhrxE9_Mt8XeLRR5aoh1DcYjtVGj3Be19ndcLL9DyuKROPsCpl8dqrC7oXhzwAd5SXheJF4sEmz1KbwoTbn-XY6zDctNehRSD__RxBPD-5qiJmvvtJR77QkVm_krjzwLxVHoHTEa7-jZCWtU-r3pm8X2JHn_aIMNHC-urtbSY4-b3l1D0XuUudzllFEtQTrZ8zghwtRb1ehOEMoskaasC_6Gdr-dTN1_Bk0mSgxXjwVoLBUwdFbXGgeYq7a5bRqdqzzsXkf175lHqovTO_JrcM7z_M__f_5Oa7BC4LAAA=',
            'embedUrl':  'https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd',
            'id': 'bac25fa7-d58d-40b6-8b01-606d165c3b43'
        };
        console.log(config);
        this.powerbi.embed(this.embedContainer, config);
    }
}
