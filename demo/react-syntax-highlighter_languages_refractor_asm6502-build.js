(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    589: function(a, s, t) {
      'use strict';
      function e(a) {
        a.languages.asm6502 = {
          comment: /;.*/,
          directive: { pattern: /\.\w+(?= )/, alias: 'keyword' },
          string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          opcode: {
            pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
            alias: 'property'
          },
          hexnumber: { pattern: /#?\$[\da-f]{2,4}/i, alias: 'string' },
          binarynumber: { pattern: /#?%[01]+/, alias: 'string' },
          decimalnumber: { pattern: /#?\d+/, alias: 'string' },
          register: { pattern: /\b[xya]\b/i, alias: 'variable' }
        };
      }
      (a.exports = e), (e.displayName = 'asm6502'), (e.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_asm6502-build.js.map
