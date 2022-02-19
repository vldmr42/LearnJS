import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const reader = new MatchReader('football.csv');
reader.read();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(reader.data);
