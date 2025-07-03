import { modifier } from 'ember-modifier';
import Yasgui from '@triply/yasgui';
import env from '../config/environment';

const defaultQuery =
  env.yasgui?.defaultQuery !== 'EMBER_YASGUI_DEFAULT_QUERY'
    ? env.yasgui?.defaultQuery
    : `PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX schema: <http://schema.org/>
SELECT DISTINCT ?book ?title ?genre ?author ?issuedOn (GROUP_CONCAT(?sameAs;separator=',') AS ?sameAsLinks) WHERE {
  ?book a schema:Book;
       dct:title ?title ;
       schema:genre ?genre ;
       dct:creator ?author ;
       dct:issued ?issuedOn ;
       owl:sameAs ?sameAs .
} GROUP BY ?book ?title ?genre ?author ?issuedOn ORDER BY ?book
`;

export default modifier(function yasgui(element /*, params, hash*/) {
  const yasgui = new Yasgui(element, {
    requestConfig: { endpoint: '/sparql' },
    autofocus: true,
  });
  yasgui.config.yasqe.value = defaultQuery;
  if (env.yasgui?.extraPrefixes !== 'EMBER_YASGUI_EXTRA_PREFIXES')
    yasgui.config.yasqe.addPrefixes(JSON.parse(env.yasgui?.extraPrefixes));
});
