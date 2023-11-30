

before(function(){
cy.fixture('example.json').as('test_data')



})


it ('read json file', function (){

cy.fixture('example.json').then((datajson)=>{
cy.log(datajson.name)
cy.log(datajson.email)



})


cy.log(this.test_data.name)

})


it('read file', function(){
cy.readFile('cypress/fixtures/example.json') .then((datajson1)=> {

    cy.log(datajson1.name)
}) 

})


it('write file', function(){

cy.writeFile('write.txt', 'hahahahhaha\n')

cy.writeFile('write.txt', '\n hahahahhahaSU',{flag:'a+'})


})


it('download file', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads_new','contohdownload.jpg')




})