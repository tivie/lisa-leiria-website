# lisa-leiria-website

## Correr o ambiente de desenvolvimento

`npm run dev`

Permite correr o ambiente de desenvolvimento e ver as alterações ao site em real-time.

Para parar o servidor carregar em `CTRL+C`


## Fazer a build do site

`npm run build`

Nota: se este comando não for corrido, as alterações não são visiveis online

## Obter as ultimas alterações do repositório
```
git fetch
gir pull
```


## Para fazer upload das alterações

```
git add --all
git commit
git push
```

# Workflow típico

1. Verificar se o repositório está "up-to-date"
    1. `git fetch`
    2. `git pull`
2. Verificar se existem conflitos de merge e resolver
3. Correr o ambiente de desenvolvimento `npm run dev`
4. Fazer as alterações nos ficheiros e testar se funciona tudo bem
5. Quando termiandas as alterações, correr o comando de build `npm run build`
6. Fazer upload das alterações para o repositório
    1. `git add --all`
    2. `git commit`
    3. Escrever mensagem de commit
    4. Guardar
    5. Fechar o ficheiro
    6. `git push`
7. Esperar um pouco e verificar se as alterações estão online `https://www.lisa-leiria.pt`
