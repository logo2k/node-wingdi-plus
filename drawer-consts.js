"use strict";

var PORTRAIT = exports.PORTRAIT  = 1;
var LANDSCAPE = exports.LANDSCAPE = 2;

exports.orientationToLabel = function(code){
	switch( code ){
		case PORTRAIT: return "portrait";
		case LANDSCAPE: return "landscape";
		default: return "unknown";
	}
};

var DMPAPER_LETTER = exports.DMPAPER_LETTER              =  1  ;
var DMPAPER_LETTERSMALL = exports.DMPAPER_LETTERSMALL         =  2  ;
var DMPAPER_TABLOID = exports.DMPAPER_TABLOID             =  3  ;
var DMPAPER_LEDGER = exports.DMPAPER_LEDGER              =  4  ;
var DMPAPER_LEGAL = exports.DMPAPER_LEGAL               =  5  ;
var DMPAPER_STATEMENT = exports.DMPAPER_STATEMENT           =  6  ;
var DMPAPER_EXECUTIVE = exports.DMPAPER_EXECUTIVE           =  7  ;
var DMPAPER_A3 = exports.DMPAPER_A3                  =  8  ;
var DMPAPER_A4 = exports.DMPAPER_A4                  =  9  ;
var DMPAPER_A4SMALL = exports.DMPAPER_A4SMALL             = 10  ;
var DMPAPER_A5 = exports.DMPAPER_A5                  = 11  ;
var DMPAPER_B4 = exports.DMPAPER_B4                  = 12  ;
var DMPAPER_B5 = exports.DMPAPER_B5                  = 13  ;
var DMPAPER_FOLIO = exports.DMPAPER_FOLIO               = 14  ;
var DMPAPER_QUARTO = exports.DMPAPER_QUARTO              = 15  ;
var DMPAPER_10X14 = exports.DMPAPER_10X14               = 16  ;
var DMPAPER_11X17 = exports.DMPAPER_11X17               = 17  ;
var DMPAPER_NOTE = exports.DMPAPER_NOTE                = 18  ;
var DMPAPER_ENV_9 = exports.DMPAPER_ENV_9               = 19  ;
var DMPAPER_ENV_10 = exports.DMPAPER_ENV_10              = 20  ;
var DMPAPER_ENV_11 = exports.DMPAPER_ENV_11              = 21  ;
var DMPAPER_ENV_12 = exports.DMPAPER_ENV_12              = 22  ;
var DMPAPER_ENV_14 = exports.DMPAPER_ENV_14              = 23  ;
var DMPAPER_CSHEET = exports.DMPAPER_CSHEET              = 24  ;
var DMPAPER_DSHEET = exports.DMPAPER_DSHEET              = 25  ;
var DMPAPER_ESHEET = exports.DMPAPER_ESHEET              = 26  ;
var DMPAPER_ENV_DL = exports.DMPAPER_ENV_DL              = 27  ;
var DMPAPER_ENV_C5 = exports.DMPAPER_ENV_C5              = 28  ;
var DMPAPER_ENV_C3 = exports.DMPAPER_ENV_C3              = 29  ;
var DMPAPER_ENV_C4 = exports.DMPAPER_ENV_C4              = 30  ;
var DMPAPER_ENV_C6 = exports.DMPAPER_ENV_C6              = 31  ;
var DMPAPER_ENV_C65 = exports.DMPAPER_ENV_C65             = 32  ;
var DMPAPER_ENV_B4 = exports.DMPAPER_ENV_B4              = 33  ;
var DMPAPER_ENV_B5 = exports.DMPAPER_ENV_B5              = 34  ;
var DMPAPER_ENV_B6 = exports.DMPAPER_ENV_B6              = 35  ;
var DMPAPER_ENV_ITALY = exports.DMPAPER_ENV_ITALY           = 36  ;
var DMPAPER_ENV_MONARCH = exports.DMPAPER_ENV_MONARCH         = 37  ;
var DMPAPER_ENV_PERSONAL = exports.DMPAPER_ENV_PERSONAL        = 38  ;
var DMPAPER_FANFOLD_US = exports.DMPAPER_FANFOLD_US          = 39  ;
var DMPAPER_FANFOLD_STD_GERMAN = exports.DMPAPER_FANFOLD_STD_GERMAN  = 40  ;
var DMPAPER_FANFOLD_LGL_GERMAN = exports.DMPAPER_FANFOLD_LGL_GERMAN  = 41  ;
var DMPAPER_ISO_B4 = exports.DMPAPER_ISO_B4              = 42  ;
var DMPAPER_JAPANESE_POSTCARD = exports.DMPAPER_JAPANESE_POSTCARD   = 43  ;
var DMPAPER_9X11 = exports.DMPAPER_9X11                = 44  ;
var DMPAPER_10X11 = exports.DMPAPER_10X11               = 45  ;
var DMPAPER_15X11 = exports.DMPAPER_15X11               = 46  ;
var DMPAPER_ENV_INVITE = exports.DMPAPER_ENV_INVITE          = 47  ;
var DMPAPER_RESERVED_48 = exports.DMPAPER_RESERVED_48         = 48  ;
var DMPAPER_RESERVED_49 = exports.DMPAPER_RESERVED_49         = 49  ;
var DMPAPER_LETTER_EXTRA = exports.DMPAPER_LETTER_EXTRA        = 50  ;
var DMPAPER_LEGAL_EXTRA = exports.DMPAPER_LEGAL_EXTRA         = 51  ;
var DMPAPER_TABLOID_EXTRA = exports.DMPAPER_TABLOID_EXTRA       = 52  ;
var DMPAPER_A4_EXTRA = exports.DMPAPER_A4_EXTRA            = 53  ;
var DMPAPER_LETTER_TRANSVERSE = exports.DMPAPER_LETTER_TRANSVERSE   = 54  ;
var DMPAPER_A4_TRANSVERSE = exports.DMPAPER_A4_TRANSVERSE       = 55  ;
var DMPAPER_LETTER_EXTRA_TRANSVERSE = exports.DMPAPER_LETTER_EXTRA_TRANSVERSE = 56 ;
var DMPAPER_A_PLUS = exports.DMPAPER_A_PLUS              = 57  ;
var DMPAPER_B_PLUS = exports.DMPAPER_B_PLUS              = 58  ;
var DMPAPER_LETTER_PLUS = exports.DMPAPER_LETTER_PLUS         = 59  ;
var DMPAPER_A4_PLUS = exports.DMPAPER_A4_PLUS             = 60  ;
var DMPAPER_A5_TRANSVERSE = exports.DMPAPER_A5_TRANSVERSE       = 61  ;
var DMPAPER_B5_TRANSVERSE = exports.DMPAPER_B5_TRANSVERSE       = 62  ;
var DMPAPER_A3_EXTRA = exports.DMPAPER_A3_EXTRA            = 63  ;
var DMPAPER_A5_EXTRA = exports.DMPAPER_A5_EXTRA            = 64  ;
var DMPAPER_B5_EXTRA = exports.DMPAPER_B5_EXTRA            = 65  ;
var DMPAPER_A2 = exports.DMPAPER_A2                  = 66  ;
var DMPAPER_A3_TRANSVERSE = exports.DMPAPER_A3_TRANSVERSE       = 67  ;
var DMPAPER_A3_EXTRA_TRANSVERSE = exports.DMPAPER_A3_EXTRA_TRANSVERSE = 68  ;
var DMPAPER_DBL_JAPANESE_POSTCARD = exports.DMPAPER_DBL_JAPANESE_POSTCARD = 69 ;
var DMPAPER_A6 = exports.DMPAPER_A6                  = 70  ;
var DMPAPER_JENV_KAKU2 = exports.DMPAPER_JENV_KAKU2          = 71  ;
var DMPAPER_JENV_KAKU3 = exports.DMPAPER_JENV_KAKU3          = 72  ;
var DMPAPER_JENV_CHOU3 = exports.DMPAPER_JENV_CHOU3          = 73  ;
var DMPAPER_JENV_CHOU4 = exports.DMPAPER_JENV_CHOU4          = 74  ;
var DMPAPER_LETTER_ROTATED = exports.DMPAPER_LETTER_ROTATED      = 75  ;
var DMPAPER_A3_ROTATED = exports.DMPAPER_A3_ROTATED          = 76  ;
var DMPAPER_A4_ROTATED = exports.DMPAPER_A4_ROTATED          = 77  ;
var DMPAPER_A5_ROTATED = exports.DMPAPER_A5_ROTATED          = 78  ;
var DMPAPER_B4_JIS_ROTATED = exports.DMPAPER_B4_JIS_ROTATED      = 79  ;
var DMPAPER_B5_JIS_ROTATED = exports.DMPAPER_B5_JIS_ROTATED      = 80  ;
var DMPAPER_JAPANESE_POSTCARD_ROTATED = exports.DMPAPER_JAPANESE_POSTCARD_ROTATED = 81 ;
var DMPAPER_DBL_JAPANESE_POSTCARD_ROTATED = exports.DMPAPER_DBL_JAPANESE_POSTCARD_ROTATED = 82 ;
var DMPAPER_A6_ROTATED = exports.DMPAPER_A6_ROTATED          = 83  ;
var DMPAPER_JENV_KAKU2_ROTATED = exports.DMPAPER_JENV_KAKU2_ROTATED  = 84  ;
var DMPAPER_JENV_KAKU3_ROTATED = exports.DMPAPER_JENV_KAKU3_ROTATED  = 85  ;
var DMPAPER_JENV_CHOU3_ROTATED = exports.DMPAPER_JENV_CHOU3_ROTATED  = 86  ;
var DMPAPER_JENV_CHOU4_ROTATED = exports.DMPAPER_JENV_CHOU4_ROTATED  = 87  ;
var DMPAPER_B6_JIS = exports.DMPAPER_B6_JIS              = 88  ;
var DMPAPER_B6_JIS_ROTATED = exports.DMPAPER_B6_JIS_ROTATED      = 89  ;
var DMPAPER_12X11 = exports.DMPAPER_12X11               = 90  ;
var DMPAPER_JENV_YOU4 = exports.DMPAPER_JENV_YOU4           = 91  ;
var DMPAPER_JENV_YOU4_ROTATED = exports.DMPAPER_JENV_YOU4_ROTATED   = 92  ;
var DMPAPER_P16K = exports.DMPAPER_P16K                = 93  ;
var DMPAPER_P32K = exports.DMPAPER_P32K                = 94  ;
var DMPAPER_P32KBIG = exports.DMPAPER_P32KBIG             = 95  ;
var DMPAPER_PENV_1 = exports.DMPAPER_PENV_1              = 96  ;
var DMPAPER_PENV_2 = exports.DMPAPER_PENV_2              = 97  ;
var DMPAPER_PENV_3 = exports.DMPAPER_PENV_3              = 98  ;
var DMPAPER_PENV_4 = exports.DMPAPER_PENV_4              = 99  ;
var DMPAPER_PENV_5 = exports.DMPAPER_PENV_5              = 100 ;
var DMPAPER_PENV_6 = exports.DMPAPER_PENV_6              = 101 ;
var DMPAPER_PENV_7 = exports.DMPAPER_PENV_7              = 102 ;
var DMPAPER_PENV_8 = exports.DMPAPER_PENV_8              = 103 ;
var DMPAPER_PENV_9 = exports.DMPAPER_PENV_9              = 104 ;
var DMPAPER_PENV_10 = exports.DMPAPER_PENV_10             = 105 ;
var DMPAPER_P16K_ROTATED = exports.DMPAPER_P16K_ROTATED        = 106 ;
var DMPAPER_P32K_ROTATED = exports.DMPAPER_P32K_ROTATED        = 107 ;
var DMPAPER_P32KBIG_ROTATED = exports.DMPAPER_P32KBIG_ROTATED     = 108 ;
var DMPAPER_PENV_1_ROTATED = exports.DMPAPER_PENV_1_ROTATED      = 109 ;
var DMPAPER_PENV_2_ROTATED = exports.DMPAPER_PENV_2_ROTATED      = 110 ;
var DMPAPER_PENV_3_ROTATED = exports.DMPAPER_PENV_3_ROTATED      = 111 ;
var DMPAPER_PENV_4_ROTATED = exports.DMPAPER_PENV_4_ROTATED      = 112 ;
var DMPAPER_PENV_5_ROTATED = exports.DMPAPER_PENV_5_ROTATED      = 113 ;
var DMPAPER_PENV_6_ROTATED = exports.DMPAPER_PENV_6_ROTATED      = 114 ;
var DMPAPER_PENV_7_ROTATED = exports.DMPAPER_PENV_7_ROTATED      = 115 ;
var DMPAPER_PENV_8_ROTATED = exports.DMPAPER_PENV_8_ROTATED      = 116 ;
var DMPAPER_PENV_9_ROTATED = exports.DMPAPER_PENV_9_ROTATED      = 117 ;
var DMPAPER_PENV_10_ROTATED = exports.DMPAPER_PENV_10_ROTATED     = 118 ;

exports.paperSizeToLabel = function(code){
	switch(code){
    	case DMPAPER_LETTER              : return  "Letter 8 1/2 x 11 in";
    	case DMPAPER_LETTERSMALL         : return  "Letter Small 8 1/2 x 11 in";
    	case DMPAPER_TABLOID             : return  "Tabloid 11 x 17 in";
    	case DMPAPER_LEDGER              : return  "Ledger 17 x 11 in";
    	case DMPAPER_LEGAL               : return  "Legal 8 1/2 x 14 in";
    	case DMPAPER_STATEMENT           : return  "Statement 5 1/2 x 8 1/2 in";
    	case DMPAPER_EXECUTIVE           : return  "Executive 7 1/4 x 10 1/2 in";
    	case DMPAPER_A3                  : return  "A3 297 x 420 mm";
    	case DMPAPER_A4                  : return  "A4 210 x 297 mm";
    	case DMPAPER_A4SMALL             : return  "A4 Small 210 x 297 mm";
    	case DMPAPER_A5                  : return  "A5 148 x 210 mm";
    	case DMPAPER_B4                  : return  "B4 (JIS) 250 x 354";
    	case DMPAPER_B5                  : return  "B5 (JIS) 182 x 257 mm";
    	case DMPAPER_FOLIO               : return  "Folio 8 1/2 x 13 in";
    	case DMPAPER_QUARTO              : return  "Quarto 215 x 275 mm";
    	case DMPAPER_10X14               : return  "10x14 in";
    	case DMPAPER_11X17               : return  "11x17 in";
    	case DMPAPER_NOTE                : return  "Note 8 1/2 x 11 in";
    	case DMPAPER_ENV_9               : return  "Envelope #9 3 7/8 x 8 7/8";
    	case DMPAPER_ENV_10              : return  "Envelope #10 4 1/8 x 9 1/2";
    	case DMPAPER_ENV_11              : return  "Envelope #11 4 1/2 x 10 3/8";
    	case DMPAPER_ENV_12              : return  "Envelope #12 4.3 x 11";
    	case DMPAPER_ENV_14              : return  "Envelope #14 5 x 11 1/2";
    	case DMPAPER_CSHEET              : return  "C size sheet";
    	case DMPAPER_DSHEET              : return  "D size sheet";
    	case DMPAPER_ESHEET              : return  "E size sheet";
    	case DMPAPER_ENV_DL              : return  "Envelope DL 110 x 220mm";
    	case DMPAPER_ENV_C5              : return  "Envelope C5 162 x 229 mm";
    	case DMPAPER_ENV_C3              : return  "Envelope C3  324 x 458 mm";
    	case DMPAPER_ENV_C4              : return  "Envelope C4  229 x 324 mm";
    	case DMPAPER_ENV_C6              : return  "Envelope C6  114 x 162 mm";
    	case DMPAPER_ENV_C65             : return  "Envelope C65 114 x 229 mm";
    	case DMPAPER_ENV_B4              : return  "Envelope B4  250 x 353 mm";
    	case DMPAPER_ENV_B5              : return  "Envelope B5  176 x 250 mm";
    	case DMPAPER_ENV_B6              : return  "Envelope B6  176 x 125 mm";
    	case DMPAPER_ENV_ITALY           : return  "Envelope 110 x 230 mm";
    	case DMPAPER_ENV_MONARCH         : return  "Envelope Monarch 3.875 x 7.5 in";
    	case DMPAPER_ENV_PERSONAL        : return  "6 3/4 Envelope 3 5/8 x 6 1/2 in";
    	case DMPAPER_FANFOLD_US          : return  "US Std Fanfold 14 7/8 x 11 in";
    	case DMPAPER_FANFOLD_STD_GERMAN  : return  "German Std Fanfold 8 1/2 x 12 in";
    	case DMPAPER_FANFOLD_LGL_GERMAN  : return  "German Legal Fanfold 8 1/2 x 13 in";
    	case DMPAPER_ISO_B4              : return  "B4 (ISO) 250 x 353 mm";
    	case DMPAPER_JAPANESE_POSTCARD   : return  "Japanese Postcard 100 x 148 mm";
    	case DMPAPER_9X11                : return  "9 x 11 in";
    	case DMPAPER_10X11               : return  "10 x 11 in";
    	case DMPAPER_15X11               : return  "15 x 11 in";
    	case DMPAPER_ENV_INVITE          : return  "Envelope Invite 220 x 220 mm";
    	case DMPAPER_RESERVED_48         : return  "RESERVED--DO NOT USE";
    	case DMPAPER_RESERVED_49         : return  "RESERVED--DO NOT USE";
    	case DMPAPER_LETTER_EXTRA        : return  "Letter Extra 9.3 x 12 in";
    	case DMPAPER_LEGAL_EXTRA         : return  "Legal Extra 9.3 x 15 in";
    	case DMPAPER_TABLOID_EXTRA       : return  "Tabloid Extra 11.69 x 18 in";
    	case DMPAPER_A4_EXTRA            : return  "A4 Extra 9.27 x 12.69 in";
    	case DMPAPER_LETTER_TRANSVERSE   : return  "Letter Transverse 8.3 x 11 in";
    	case DMPAPER_A4_TRANSVERSE       : return  "A4 Transverse 210 x 297 mm";
    	case DMPAPER_LETTER_EXTRA_TRANSVERSE : return "Letter Extra Transverse 9.3 x 12 in";
    	case DMPAPER_A_PLUS              : return  "SuperA/SuperA/A4 227 x 356 mm";
    	case DMPAPER_B_PLUS              : return  "SuperB/SuperB/A3 305 x 487 mm";
    	case DMPAPER_LETTER_PLUS         : return  "Letter Plus 8.5 x 12.69 in";
    	case DMPAPER_A4_PLUS             : return  "A4 Plus 210 x 330 mm";
    	case DMPAPER_A5_TRANSVERSE       : return  "A5 Transverse 148 x 210 mm";
    	case DMPAPER_B5_TRANSVERSE       : return  "B5 (JIS) Transverse 182 x 257 mm";
    	case DMPAPER_A3_EXTRA            : return  "A3 Extra 322 x 445 mm";
    	case DMPAPER_A5_EXTRA            : return  "A5 Extra 174 x 235 mm";
    	case DMPAPER_B5_EXTRA            : return  "B5 (ISO) Extra 201 x 276 mm";
    	case DMPAPER_A2                  : return  "A2 420 x 594 mm";
    	case DMPAPER_A3_TRANSVERSE       : return  "A3 Transverse 297 x 420 mm";
    	case DMPAPER_A3_EXTRA_TRANSVERSE : return  "A3 Extra Transverse 322 x 445 mm";
    	case DMPAPER_DBL_JAPANESE_POSTCARD : return "Japanese Double Postcard 200 x 148 mm";
    	case DMPAPER_A6                  : return  "A6 105 x 148 mm";
    	case DMPAPER_JENV_KAKU2          : return  "Japanese Envelope Kaku #2";
    	case DMPAPER_JENV_KAKU3          : return  "Japanese Envelope Kaku #3";
    	case DMPAPER_JENV_CHOU3          : return  "Japanese Envelope Chou #3";
    	case DMPAPER_JENV_CHOU4          : return  "Japanese Envelope Chou #4";
    	case DMPAPER_LETTER_ROTATED      : return  "Letter Rotated 11 x 8 1/2 11 in";
    	case DMPAPER_A3_ROTATED          : return  "A3 Rotated 420 x 297 mm";
    	case DMPAPER_A4_ROTATED          : return  "A4 Rotated 297 x 210 mm";
    	case DMPAPER_A5_ROTATED          : return  "A5 Rotated 210 x 148 mm";
    	case DMPAPER_B4_JIS_ROTATED      : return  "B4 (JIS) Rotated 364 x 257 mm";
    	case DMPAPER_B5_JIS_ROTATED      : return  "B5 (JIS) Rotated 257 x 182 mm";
    	case DMPAPER_JAPANESE_POSTCARD_ROTATED : return "Japanese Postcard Rotated 148 x 100 mm";
    	case DMPAPER_DBL_JAPANESE_POSTCARD_ROTATED : return "Double Japanese Postcard Rotated 148 x 200 mm";
    	case DMPAPER_A6_ROTATED          : return  "A6 Rotated 148 x 105 mm";
    	case DMPAPER_JENV_KAKU2_ROTATED  : return  "Japanese Envelope Kaku #2 Rotated";
    	case DMPAPER_JENV_KAKU3_ROTATED  : return  "Japanese Envelope Kaku #3 Rotated";
    	case DMPAPER_JENV_CHOU3_ROTATED  : return  "Japanese Envelope Chou #3 Rotated";
    	case DMPAPER_JENV_CHOU4_ROTATED  : return  "Japanese Envelope Chou #4 Rotated";
    	case DMPAPER_B6_JIS              : return  "B6 (JIS) 128 x 182 mm";
    	case DMPAPER_B6_JIS_ROTATED      : return  "B6 (JIS) Rotated 182 x 128 mm";
    	case DMPAPER_12X11               : return  "12 x 11 in";
    	case DMPAPER_JENV_YOU4           : return  "Japanese Envelope You #4";
    	case DMPAPER_JENV_YOU4_ROTATED   : return  "Japanese Envelope You #4 Rotated";
    	case DMPAPER_P16K                : return  "PRC 16K 146 x 215 mm";
    	case DMPAPER_P32K                : return  "PRC 32K 97 x 151 mm";
    	case DMPAPER_P32KBIG             : return  "PRC 32K(Big) 97 x 151 mm";
    	case DMPAPER_PENV_1              : return  "PRC Envelope #1 102 x 165 mm";
    	case DMPAPER_PENV_2              : return  "PRC Envelope #2 102 x 176 mm";
    	case DMPAPER_PENV_3              : return  "PRC Envelope #3 125 x 176 mm";
    	case DMPAPER_PENV_4              : return  "PRC Envelope #4 110 x 208 mm";
    	case DMPAPER_PENV_5              : return "PRC Envelope #5 110 x 220 mm";
    	case DMPAPER_PENV_6              : return "PRC Envelope #6 120 x 230 mm";
    	case DMPAPER_PENV_7              : return "PRC Envelope #7 160 x 230 mm";
    	case DMPAPER_PENV_8              : return "PRC Envelope #8 120 x 309 mm";
    	case DMPAPER_PENV_9              : return "PRC Envelope #9 229 x 324 mm";
    	case DMPAPER_PENV_10             : return "PRC Envelope #10 324 x 458 mm";
    	case DMPAPER_P16K_ROTATED        : return "PRC 16K Rotated";
    	case DMPAPER_P32K_ROTATED        : return "PRC 32K Rotated";
    	case DMPAPER_P32KBIG_ROTATED     : return "PRC 32K(Big) Rotated";
    	case DMPAPER_PENV_1_ROTATED      : return "PRC Envelope #1 Rotated 165 x 102 mm";
    	case DMPAPER_PENV_2_ROTATED      : return "PRC Envelope #2 Rotated 176 x 102 mm";
    	case DMPAPER_PENV_3_ROTATED      : return "PRC Envelope #3 Rotated 176 x 125 mm";
    	case DMPAPER_PENV_4_ROTATED      : return "PRC Envelope #4 Rotated 208 x 110 mm";
    	case DMPAPER_PENV_5_ROTATED      : return "PRC Envelope #5 Rotated 220 x 110 mm";
    	case DMPAPER_PENV_6_ROTATED      : return "PRC Envelope #6 Rotated 230 x 120 mm";
    	case DMPAPER_PENV_7_ROTATED      : return "PRC Envelope #7 Rotated 230 x 160 mm";
    	case DMPAPER_PENV_8_ROTATED      : return "PRC Envelope #8 Rotated 309 x 120 mm";
    	case DMPAPER_PENV_9_ROTATED      : return "PRC Envelope #9 Rotated 324 x 229 mm";
    	case DMPAPER_PENV_10_ROTATED     : return "PRC Envelope #10 Rotated 458 x 324 mm";
    	default: return "" + code;
	}	
}

var QUALITY_DRAFT = exports.QUALITY_DRAFT = -1;
var QUALITY_LOW = exports.QUALITY_LOW = -2;
var QUALITY_MEDIUM = exports.QUALITY_MEDIUM = -3;
var QUALITY_HIGH = exports.QUALITY_HIGH = -4;

exports.qualityToLabel = function(quality){
	var code = +quality;
	if( code > 0 ){
		return code + "dpi";
	} else {
		switch(code){
			case QUALITY_DRAFT: return "draft";
			case QUALITY_LOW: return "low";
			case QUALITY_MEDIUM: return "medium";
			case QUALITY_HIGH: return "high";
			default: return "unknown";
		}
	}
};

var DMBIN_UPPER = exports.DMBIN_UPPER         = 1;
var DMBIN_LOWER = exports.DMBIN_LOWER         = 2;
var DMBIN_MIDDLE = exports.DMBIN_MIDDLE        = 3;
var DMBIN_MANUAL = exports.DMBIN_MANUAL        = 4;
var DMBIN_ENVELOPE = exports.DMBIN_ENVELOPE      = 5;
var DMBIN_ENVMANUAL = exports.DMBIN_ENVMANUAL     = 6;
var DMBIN_AUTO = exports.DMBIN_AUTO          = 7;
var DMBIN_TRACTOR = exports.DMBIN_TRACTOR       = 8;
var DMBIN_SMALLFMT = exports.DMBIN_SMALLFMT      = 9;
var DMBIN_LARGEFMT = exports.DMBIN_LARGEFMT      = 10;
var DMBIN_LARGECAPACITY = exports.DMBIN_LARGECAPACITY = 11;
var DMBIN_CASSETTE = exports.DMBIN_CASSETTE      = 14;
var DMBIN_FORMSOURCE = exports.DMBIN_FORMSOURCE    = 15;

exports.sourceToLabel = function(source){
	switch(+source){
    	case DMBIN_UPPER         : return "UPPER";
    	case DMBIN_LOWER         : return "LOWER";
    	case DMBIN_MIDDLE        : return "MIDDLE";
    	case DMBIN_MANUAL        : return "MANUAL";
    	case DMBIN_ENVELOPE      : return "ENVELOPE";
    	case DMBIN_ENVMANUAL     : return "ENVMANUAL";
    	case DMBIN_AUTO          : return "AUTO";
    	case DMBIN_TRACTOR       : return "TRACTOR";
    	case DMBIN_SMALLFMT      : return "SMALLFMT";
    	case DMBIN_LARGEFMT      : return "LARGEFMT";
    	case DMBIN_LARGECAPACITY : return "LARGECAPACITY";
    	case DMBIN_CASSETTE      : return "CASSETTE";
    	case DMBIN_FORMSOURCE    : return "FORMSOURCE";
        default: return "UNKNOWN";
	}
};