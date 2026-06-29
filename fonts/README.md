# Tipografias - Instruções

## Estrutura esperada

Para que as fontes carreguem corretamente no site, os arquivos devem ser organizados assim:

```
/fonts
  /vonca
    vonca-regular.woff2
    vonca-regular.woff
    vonca-bold.woff2
    vonca-bold.woff
  /satoshi
    satoshi-regular.woff2
    satoshi-regular.woff
    satoshi-medium.woff2
    satoshi-medium.woff
    satoshi-bold.woff2
    satoshi-bold.woff
```

## Como adicionar as fontes

1. Se o designer forneceu arquivos .otf ou .ttf, é necessário converter para WOFF2 e WOFF para otimizar para web
2. Use um conversor online como: https://convertio.co/font-converter/ ou https://cloudconvert.com/
3. Copie os arquivos convertidos para as pastas correspondentes

## Formatos

- **WOFF2**: Melhor compressão, suportado em navegadores modernos
- **WOFF**: Fallback para navegadores mais antigos

Ambos os formatos devem ser incluídos para máxima compatibilidade.
