function evalResult(){
var gmath= parseInt(document.getElementById('mathGrade').value);
var rmath= document.getElementById('mathRemarks');
var gscience= parseInt(document.getElementById('scienceGrade').value);
var rscience= document.getElementById('scienceRemarks');
var genglish= parseInt(document.getElementById('englishGrade').value);
var renglish= document.getElementById('englishRemarks');
var gfilipino= parseInt(document.getElementById('filipinoGrade').value);
var rfilipino= document.getElementById('filipinoRemarks');
var gpe= parseInt(document.getElementById('peGrade').value);
var rpe= document.getElementById('peRemarks');
var studentRank = document.getElementById('Rank');

    if (gmath==0 || gscience==0 || genglish==0 || gfilipino==0 || gpe==0)
    {
        if(gmath==0)
        {
            rmath.textContent="Insert Grade";
        }
        if(gscience==0)
        {
            rscience.textContent= "Insert Grade";
        }
        if(genglish==0)
        {
            renglish.textContent= "Insert Grade";
        }
        if(gfilipino==0)
        {
            rfilipino.textContent="Insert Grade";
        }
        if(gpe==0)
        {
            rpe.textContent="Insert Grade";
        }
        studentRank.textContent="INComplete Grade";
    }
    if (gmath>100 || gscience>100 || genglish>100 || gfilipino>100 || gpe>100)
    {
        if(gmath>100)
        {
            rmath.textContent="Invalid Grade";
        }
        if(gscience>100)
        {
            rscience.textContent= "Invalid Grade";
        }
        if(genglish>100)
        {
            renglish.textContent= "Invalid Grade";
        }
        if(gfilipino>100)
        {
            rfilipino.textContent="Invalid Grade";
        }
        if(gpe>100)
        {
            rpe.textContent="Invalid Grade";
        }
        studentRank.textContent="Invalid Grade";
    }
    else
    {
        if (gmath>=90 && gmath<=100)
        {
            rmath.textContent="Excellent";
        }
        if (gmath>=80 && gmath<=89)
        {
            rmath.textContent="Good";
        }
        if (gmath>=70 && gmath<=79)
        {
            rmath.textContent="Average";
        }
        if (gmath>=60 && gmath<=69)
        {
            rmath.textContent="Poor";
        }
        if (gmath>0 && gmath<=59)
        {
            rmath.textContent="fail";
        }


        if (gscience>=90 && gscience<=100)
        {
            rscience.textContent="Excellent";
        }
        if (gscience>=80 && gscience<=89)
        {
            rscience.textContent="Good";
        }
        if (gscience>=70 && gscience<=79)
        {
            rscience.textContent="Average";
        }
        if (gscience>=60 && gscience<=69)
        {
            rscience.textContent="Poor";
        }
        if (gscience>0 && gscience<=59)
        {
            rscience.textContent="fail";
        }


        if (genglish>=90 && genglish<=100)
        {
            renglish.textContent="Excellent";
        }
        if (genglish>=80 && genglish<=89)
        {
            renglish.textContent="Good";
        }
        if (genglish>=70 && genglish<=79)
        {
            renglish.textContent="Average";
        }
        if (genglish>=60 && genglish<=69)
        {
            renglish.textContent="Poor";
        }
        if (genglish>0 && genglish<=59)
        {
            renglish.textContent="fail";
        }


        if (gfilipino>=90 && gfilipino<=100)
        {
            rfilipino.textContent="Excellent";
        }
        if (gfilipino>=80 && gfilipino<=89)
        {
            rfilipino.textContent="Good";
        }
        if (gfilipino>=70 && gfilipino<=79)
        {
            rfilipino.textContent="Average";
        }
        if (gfilipino>=60 && gfilipino<=69)
        {
            rfilipino.textContent="Poor";
        }
        if (gfilipino>0 && gfilipino<=59)
        {
            rfilipino.textContent="fail";
        }


        if (gpe>=90 && gpe<=100)
        {
            rpe.textContent="Excellent";
        }
        if (gpe>=80 && gpe<=89)
        {
            rpe.textContent="Good";
        }
        if (gpe>=70 && gpe<=79)
        {
            rpe.textContent="Average";
        }
        if (gpe>=60 && gpe<=69)
        {
            rpe.textContent="Poor";
        }
        if (gpe>0 && gpe<=59)
        {
            rpe.textContent="fail";
        }


        if ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100) )
        {
            studentRank.textContent="Top Honor Student";
        }
        if (((gmath>=70 && gmath<=89) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100))
        || ((gmath>=90 && gmath<=100) && (genglish>=70 && genglish<=89) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=70 && gscience<=89) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=70 && gfilipino<=89) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=70 && gpe<=89) )
        
        || ((gmath>=70 && gmath<=89) && (genglish>=70 && genglish<=89) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100))
        || ((gmath>=70 && gmath<=89) && (genglish>=90 && genglish<=100) && (gscience>=70 && gscience<=89) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100))
        || ((gmath>=70 && gmath<=89) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=70 && gfilipino<=89) && (gpe>=90 && gpe<=100))
        || ((gmath>=70 && gmath<=89) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=70 && gpe<=89))
        
        || ((gmath>=90 && gmath<=100) && (genglish>=70 && genglish<=89) && (gscience>=70 && gscience<=89) && (gfilipino>=90 && gfilipino<=100) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=70 && genglish<=89) && (gscience>=90 && gscience<=100) && (gfilipino>=70 && gfilipino<=89) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=70 && genglish<=89) && (gscience>=90 && gscience<=100) && (gfilipino>=90 && gfilipino<=100) && (gpe>=70 && gpe<=89) )
        
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=70 && gscience<=89) && (gfilipino>=70 && gfilipino<=89) && (gpe>=90 && gpe<=100) )
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=70 && gscience<=89) && (gfilipino>=90 && gfilipino<=100) && (gpe>=70 && gpe<=89) )
        
        || ((gmath>=90 && gmath<=100) && (genglish>=90 && genglish<=100) && (gscience>=90 && gscience<=100) && (gfilipino>=70 && gfilipino<=89) && (gpe>=70 && gpe<=89) ))
        {
            studentRank.textContent="Second Honorable Student";
        }
        if ((gmath>=70 && gmath<=89) && (genglish>=70 && genglish<=89) && (gscience>=70 && gscience<=89) && (gfilipino>=70 && gfilipino<=89) && (gpe>=70 && gpe<=89) )
        {
            studentRank.textContent="Student Pass All the Subject";
        }
        if ((gmath>=1 && gmath<69) && (genglish>=1 && genglish<69) && (gscience>=1 && gscience<69) && (gfilipino>=1 && gfilipino<69) && (gpe>=1 && gpe<69) )
        {
            studentRank.textContent="Student is Repeater";
        }
        if ((gmath>=1 && gmath<69) || (genglish>=1 && genglish<69) || (gscience>=1 && gscience<69) || (gfilipino>=1 && gfilipino<69) || (gpe>=1 && gpe<69) )
        {
            studentRank.textContent="Summer Class is Waiting for you";
        }
    }


}