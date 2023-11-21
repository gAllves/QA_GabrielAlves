Feature: Testando API Pokemon

Background: Executa antes de cada teste
        * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno pokemon/pikachu
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno pokemon/pikachu com informações invalidas 
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu/12345'
        When method get
        Then status 404

Scenario: Testando retorno pikachu e verificando o JSON.
        Given url url_base
        And path '/pokemon/pikachu'
        When method get
        Then status 200
        And match response.name == "pikachu"
        And match response.id == 25

Scenario: Testando retorno pokemon Red entrando em um dos elementos do array de idiomas e testando retorno JSON
        Given url url_base
        And path '/version/1/'
        When method get
        Then status 200
        And def idioma = $.names[5].language.url
        And print idioma
        And url idioma 
        When method get
        Then status 200
        And match response.name == "es"
        And match response.id == 7