import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
@Injectable()
export class AnalysisService extends BaseService {

    constructor(private http: HttpClient) {
        super(http);
    }

    searchAnalyses() {
        return this.getAll('Analysis');
    }

    getAnalysisById(id) {
        return this.get('Analysis', id);
    }

    getAnalysisByUserId(id) {
        return this.get('Analysis/user', id);
    }

    createAnalysis(analysis: any) {
        return this.insert('Analysis', analysis);
    }

    postAnalysisAnswers(analysis: any) {
        return this.insert('AnalysisApplication', analysis);
    }

    updateAnalysis(analysis: any) {
        return this.update('AnalysisApplication', analysis.AnalysisId, analysis);
    }

    deleteAnalysis(id: number) {
        return this.delete('Analysis', id);
    }

}
