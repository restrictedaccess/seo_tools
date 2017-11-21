// declare let describe:any;
// declare let it:any;
// declare let require:any;
//
// let assert = require("assert");
// let should = require("should");
//
// import {PreScreenedCandidate} from "../models/PreScreenedCandidate";
// import {CandidateCategorizationEntry} from "../models/CandidateCategorizationEntry";
//
// describe("PreScreenedCandidate", ()=>{
//     it("Should add category properly", (done:any)=>{
//        var candidate = new PreScreenedCandidate();
//        var category = new CandidateCategorizationEntry();
//        category.setId(10);
//        candidate.addCategorizationEntry(category);
//        category = new CandidateCategorizationEntry();
//        category.setId(10)
//        should(candidate.getCategorizationEntries().length).equal(1);
//        done();
//     });
//
//     it("Should remove category properly", (done:any)=>{
//        var candidate = new PreScreenedCandidate();
//        var category = new CandidateCategorizationEntry();
//        category.setId(10);
//        candidate.addCategorizationEntry(category);
//
//
//        category = new CandidateCategorizationEntry();
//        category.setId(11)
//        candidate.addCategorizationEntry(category);
//
//
//        category = new CandidateCategorizationEntry();
//        category.setId(12)
//        candidate.addCategorizationEntry(category);
//
//
//        category = new CandidateCategorizationEntry();
//        category.setId(11)
//        candidate.removeCategorizationEntry(category);
//
//        should(candidate.getCategorizationEntries().length).equal(2);
//        done();
//     });
//
//
// });
//
//
