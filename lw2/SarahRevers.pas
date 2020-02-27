PROGRAM SaharRevers(INPUT, OUTPUT);
USES
  Dos;
VAR
  Status: STRING;
BEGIN
  WRITELN;
  Status := GetEnv('QUERY_STRING');
  IF Status = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Status = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('Sarah didn''t say')   
END.
