"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiEngine = void 0;
class UiEngine {
    createGameUi(problemCount, factor) {
        let templateString = '';
        for (let i = 1; i <= problemCount; i++) {
            templateString += `<div class="form-group">
      <label for="answer_${i}" class="col-sm-2 control-label">${factor} X ${i}</label>
      <div class="col-sm-1">
        <input type="text" class="form-control" id="answer_${i}" size="5" />
      </div>
    </div>`;
        }
        return templateString;
    }
}
exports.UiEngine = UiEngine;
//# sourceMappingURL=UiEngine.js.map