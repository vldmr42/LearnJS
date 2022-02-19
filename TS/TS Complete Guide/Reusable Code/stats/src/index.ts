import { ConsoleReport } from './ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './WinsAnalysis';

const reader = new MatchReader('football.csv');
reader.read();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(reader.data);
