var want = {}
module.exports = {
    beforeEach: browser => {
        want = browser.page.wantedObjects()
        want
        .navigate()
    },
    after: browser => {
        want
       .end()
    },
    'Test Enter Wanted': browser => {
        var enterWanted = (want, fieldInfo) =>{
           want
           .navigate('http://localhost:3000/#/enter')
           .setValue('input[name="hdrInput"]', fieldInfo.header)
           .setValue('input[name="mkeInput"]', fieldInfo.mke)
           .setValue('input[name="oriInput"]', fieldInfo.oai)
           .setValue('input[name="namInput"]', fieldInfo.name)
           .setValue('input[name="hgtInput"]', fieldInfo.height)
           .setValue('input[name="wgtInput"]', fieldInfo.weight)
           .setValue('input[name="haiInput"]', fieldInfo.hair)
           .setValue('input[name="offInput"]', fieldInfo.offense)
           .setValue('input[name="olnInput"]', fieldInfo.license)
           .click('#saveBtn')
           .verify.containsText('ul[id="errorList"]',"If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date")
        }
        enterWanted(want, {
            header: '1234567890',
            mke: 'CAB',
            oai: '5674391',
            name: 'Bob Smith',
            height: '602',
            weight: '201',
            hair: 'blonde',
            offense: 'murder',
            license: 'UT12345'


        })



    },
    'The Name of our Test.': browser => {
        
    },
    'Another Test': browser => {
        
    }
}