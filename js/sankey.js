$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/description.json", desc);
function desc(data){
var chart=am4core.create("desc", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/id.json", id);
function id(data){
var chart=am4core.create("id", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/name.json", name);
function name(data){
var chart=am4core.create("name", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/sameAs.json", sameAs);
function sameAs(data){
var chart=am4core.create("sameAs", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/url.json", url);
function url(data){
var chart=am4core.create("url", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/relatedLink.json", rellink);
function rellink(data){
var chart=am4core.create("rellink", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/author.json", author);
function author(data){
var chart=am4core.create("author", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/citation.json", citation);
function citation(data){
var chart=am4core.create("citation", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/contributor.json", contributor);
function contributor(data){
var chart=am4core.create("contributor", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/copyrightHolder.json", copyrightHolder);
function copyrightHolder(data){
var chart=am4core.create("copyrightHolder", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/copyrightYear.json", copyrightYear);
function copyrightYear(data){
var chart=am4core.create("copyrightYear", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/creator.json", creator);
function creator(data){
var chart=am4core.create("creator", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/dateCreated.json", dateCreated);
function dateCreated(data){
var chart=am4core.create("dateCreated", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/dateModified.json", dateModified);
function dateModified(data){
var chart=am4core.create("dateModified", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/id.json", datePublished);
function datePublished(data){
var chart=am4core.create("datePublished", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/editor.json", editor);
function editor(data){
var chart=am4core.create("editor", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/encoding.json", encoding);
function encoding(data){
var chart=am4core.create("encoding", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/fileFormat.json", fileFormat);
function fileFormat(data){
var chart=am4core.create("fileFormat", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/funder.json", funder);
function funder(data){
var chart=am4core.create("funder", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/keywords.json", keywords);
function keywords(data){
var chart=am4core.create("keywords", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/license.json", license);
function license(data){
var chart=am4core.create("license", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/producer.json", producer);
function producer(data){
var chart=am4core.create("producer", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/provider.json", provider);
function provider(data){
var chart=am4core.create("provider", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/publisher.json", publisher);
function publisher(data){
var chart=am4core.create("publisher", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/sponsor.json", sponsor);
function sponsor(data){
var chart=am4core.create("sponsor", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/version.json", version);
function version(data){
var chart=am4core.create("version", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/isAccessibleForFree.json", isAccessibleForFree);
function isAccessibleForFree(data){
var chart=am4core.create("isAccessibleForFree", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/isPartOf.json", isPartOf);
function isPartOf(data){
var chart=am4core.create("isPartOf", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/hasPart.json", hasPart);
function hasPart(data){
var chart=am4core.create("hasPart", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/position.json", position);
function position(data){
var chart=am4core.create("position", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/spatialCoverage.json", spatialCoverage);
function spatialCoverage(data){
var chart=am4core.create("spatialCoverage", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/temporalCoverage.json", temporalCoverage);
function temporalCoverage(data){
var chart=am4core.create("temporalCoverage", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/distribution.json", distribution);
function distribution(data){
var chart=am4core.create("distribution", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/includedInDataCatalog.json", includedInDataCatalog);
function includedInDataCatalog(data){
var chart=am4core.create("includedInDataCatalog", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/measurementTechnique.json", measurementTechnique);
function measurementTechnique(data){
var chart=am4core.create("measurementTechnique", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/variableMeasured.json", variableMeasured);
function variableMeasured(data){
var chart=am4core.create("variableMeasured", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/variablesMeasured.json", variablesMeasured);
function variablesMeasured(data){
var chart=am4core.create("variablesMeasured", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/dataset.json", dataset);
function dataset(data){
var chart=am4core.create("dataset", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/measurementTechnique(DataCatalog).json", measurementTechnique1);
function measurementTechnique1(data){
var chart=am4core.create("measurementTechnique1", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/sourceOrganization.json", sourceOrganization);
function sourceOrganization(data){
var chart=am4core.create("sourceOrganization", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/inLanguage.json", inLanguage);
function inLanguage(data){
var chart=am4core.create("inLanguage", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/additionalType.json", additionalType);
function additionalType(data){
var chart=am4core.create("additionalType", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/productionDate.json", productionDate);
function productionDate(data){
var chart=am4core.create("productionDate", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/contentURL.json", contentURL);
function contentURL(data){
var chart=am4core.create("contentURL", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/subjectOf.json", subjectOf);
function subjectOf(data){
var chart=am4core.create("subjectOf", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}

$.getJSON("https://ito-coop.github.io/SchemaCrosswalks/json/about.json", about);
function about(data){
var chart=am4core.create("about", am4charts.SankeyDiagram)
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.paddingRight = 90;
}